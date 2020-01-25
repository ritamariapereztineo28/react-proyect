export default function SearchInformation(){
    let clientId = '96b6b151da73dca0f9a6b846ce863cae14d22f2f7433084ba441ca60e5f8824c'
    // let wtf = "flower"
    let url= "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=flower";
    
    fetch(url)
    .then(function(info){
        return JSON.stringify(info.data).toString();
    
})

}
