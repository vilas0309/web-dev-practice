import { dates } from './utils/dates.js'
import { GoogleGenAI, Tokens } from "@google/genai"

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

// const interaction = await ai.interactions.create({
//   model: "gemini-3.5-flash",
//   system_instruction : "Your helpful assisant that explians in a langaue that 10 year old can understand. Your answer should always be in les than 100 words",
//   input: "What is a quantum computer",
// });
// console.log("Start")
// console.log(interaction.output_text);

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${import.meta.env.VITE_POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch(err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    // console.log(data)
    const message = [

    ]
    try{
        const interaction = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents:[{
                role:'user',
                parts:[{text:'Analyze the following stock prices and give a short prediction:\n'+JSON.stringify(data)+`, note this I'm going to display it webpage it plain text don't use any styles or fonts`}]
            }],
            config:[{
                systemInstruction:`You are a trading guru. Given data on share prices over the past 3 days,
                                write a report of no more than 150 words describing the stocks performance and 
                                recommending whether to buy, hold or sell`,
            }]
        });
        // console.log(interaction.text)
        renderReport(interaction.text)
    }catch(err){
        console.log('Error:'+err)
        loadingArea.innerHTML=`Unable to access AI. Please refresh and try again`
    }
}   

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}