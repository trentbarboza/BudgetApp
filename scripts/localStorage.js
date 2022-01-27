let budget =[];
let nameANDcost = [];


function SaveNameNCost(expenseTXTInput, expenseNUMBERInput){
    nameANDcost.push(expenseTXTInput, expenseNUMBERInput);
    localStorage.setItem('NameNCost',JSON.stringify(nameANDcost));
}

function SaveToLocalStorageNameNCost(){
    localStorage.setItem('NameNCost',JSON.stringify(nameANDcost));
}

function SaveToLocalStorageBudget(budgetInput)
{
    budget.push(budgetInput);
    localStorage.setItem('Budget',JSON.stringify(budget));
}

function SaveToLocalStorageBudget1()
{
      localStorage.setItem('Budget',JSON.stringify(budget));
}



let localStorageItem;

function GetLocalStorage(){
    localStorageItem = localStorage.getItem('NameNCost');
    localStorageItem != null ? nameANDcost = JSON.parse(localStorageItem) : nameANDcost = [];
    return nameANDcost;
}


function GetLocalStorage1(){
    localStorageItem = localStorage.getItem('Budget');
    localStorageItem != null ? budget = JSON.parse(localStorageItem) : budget = [];
    return budget;
}

function RemoveFromLocalStorage(expenseTXTInput, expenseNUMBERInput){
    let expenseIndex = nameANDcost.indexOf(expenseTXTInput, expenseNUMBERInput);
    //found cityname in array favorites
    nameANDcost.splice(expenseIndex,1);
    nameANDcost.splice(expenseIndex,2);
    SaveToLocalStorageNameNCost();
}

function RemoveFromLocalStorageBudget(budgetInput){
    let budgetIndex = budget.indexOf(budgetInput);
    //found cityname in array favorites
    budget.splice(budgetIndex,1);
    SaveToLocalStorageBudget1();
}


GetLocalStorage1();
GetLocalStorage();

export {SaveToLocalStorageBudget, budget, SaveNameNCost, nameANDcost, RemoveFromLocalStorage, RemoveFromLocalStorageBudget}