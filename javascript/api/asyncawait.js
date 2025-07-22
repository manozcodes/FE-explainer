const URL = "https://newsapi.org/v2/everything?q=apple&from=2025-07-18&to=2025-07-18&sortBy=popularity&apiKey=a9345d8040344789b822d8bb852baed6";

const imagainedAPI = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getApi = async () => {
    console.log('111');
    console.log('222')
    console.log('Waiting.......')
    await imagainedAPI(10000)
    // const response =  await fetch(URL);
    // console.log(response)
    console.log('3333')
}

getApi();
