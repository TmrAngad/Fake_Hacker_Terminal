//Currency ConverTer

const currUrl='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'

// Coutrylist variabels

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};

const selects = document.querySelectorAll('select')
let formCurr = document.querySelector('.from')
let toCurr = document.querySelector('.to')
let ConBut=document.querySelector('button')
let intCon=document.querySelector('input')

//add all coutry
selects.forEach((select) => {
    select.addEventListener('click', () => {
        for (countryName in countryList) {
            let newOption = document.createElement('option')
            newOption.innerHTML = countryName
            newOption.value = countryName
            select.append(newOption)
        }
        formCurr.addEventListener('change', (opt) => {
            updateFlagfrom(opt.target)
        })
        toCurr.addEventListener('change', (opt) => {
            updateFlagto(opt.target)
        })

    })
})
const updateFlagfrom = (opt) => {
    let currCode = opt.value
    let currencyCode = countryList[currCode]
    let formSrc = `https://flagsapi.com/${currencyCode}/flat/64.png`
    let fromimg = document.querySelector('.fromImg')
    fromimg.src = formSrc
}
const updateFlagto=(opt)=>{
    let currCode = opt.value
    let currencyCode = countryList[currCode]
    let toSrc = `https://flagsapi.com/${currencyCode}/flat/64.png`
    let toImg = document.querySelector('.toImg')
    toImg.src = toSrc
}


//lets controll input container

const inputAmt=()=>{
    intCon=document.querySelector('input')
    if(intCon.value<=0 || intCon.value=="" ){
        intCon.value="1"
    }
}

//lest convert amount

const converter= async ()=>{
    let url=`${currUrl}/${formCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let respose=await fetch(url)
    let data=await respose.json()
    let rate=data[toCurr.value.toLowerCase()]
    let msg=document.querySelector('p')
    msg.innerHTML=`${intCon.value} ${formCurr.value} = ${intCon.value*rate} ${toCurr.value}`
}

ConBut.addEventListener('click',()=>{
    inputAmt()
    converter()
})

window.addEventListener('load',()=>{
    converter()
})