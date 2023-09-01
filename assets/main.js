console.log("Main.js working")

const populate = async (value, currency) => {
    let myStr = ""
    // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_iPP9wEuz6jqa6DbhcyRnjE7lggC8V8Fa2hRq3Mnx&base_currency=" + currency
    // let response = await fetch(url)
    // let rJson = await response.json()

    file = "./Currencies/" + currency + ".json"

    const response = await fetch(file);

    const rJson = await response.json();

    document.querySelector(".container1").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                            <td>${key}</td>
                            <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                        </tr> 
                    `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
    console.log(currency)
})

function searchTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("currencyTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}