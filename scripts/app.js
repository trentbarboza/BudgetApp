import {SaveToLocalStorageBudget, budget, SaveNameNCost, nameANDcost, RemoveFromLocalStorage, RemoveFromLocalStorageBudget} from './localStorage.js';

let budgetInput = document.getElementById('budgetInput');
let budgetBTN = document.getElementById('budgetBTN');
let expenseTXTInput = document.getElementById('expenseTXTInput');
let expenseNUMBERInput = document.getElementById('expenseNUMBERInput');
let expenseBTN = document.getElementById('expenseBTN');

let injectHere = document.getElementById('injectHere');
let injectHere2 = document.getElementById('injectHere2');
let injectHere3 = document.getElementById('injectHere3');

budgetBTN.addEventListener('click', function(e){
createBudget(budgetInput.value);
SaveToLocalStorageBudget(budgetInput.value);
})

expenseBTN.addEventListener('click', function(e){
    createExpense(expenseTXTInput.value, expenseNUMBERInput.value);
    SaveNameNCost(expenseTXTInput.value, expenseNUMBERInput.value);
    createTotal();
})



function createBudget(budgetInput){
    let p = document.createElement('h4');
    p.className = 'text-center';
    p.textContent = "Budget: $" + budgetInput;
    p.id = budgetInput

    
    let div = document.createElement('div');
    div.className = 'col-12 pt-5';
    div.appendChild(p);

    injectHere.appendChild(div);

    let clickToRemove = document.getElementById(budgetInput);
    clickToRemove.addEventListener('click', function(){
        document.getElementById(budgetInput).remove();
        RemoveFromLocalStorageBudget(budgetInput);
    });
}

function createExpense(expenseTXTInput, expenseNUMBERInput){
    let p = document.createElement('h4');
    p.className = 'text-center';
    p.textContent = "Expense Name: " + expenseTXTInput + " Cost: -$" + expenseNUMBERInput;
       
    let div = document.createElement('div');
    div.className = 'col-12 pt-5';
    div.appendChild(p);

    injectHere2.appendChild(div);

    // let clickToRemove = document.getElementById(expenseTXTInput);
    div.addEventListener('click', function(){
        // document.getElementById(expenseTXTInput).remove();
        div.remove();       
        RemoveFromLocalStorage(expenseTXTInput, expenseNUMBERInput);
    });
}


function createTotal(){
    let p = document.createElement('h4');
    p.className = 'text-center';
    p.textContent = "Balance: " + (budgetInput.value - expenseNUMBERInput.value);
    
    let div = document.createElement('div');
    div.className = 'col-12 pt-5';
    div.appendChild(p);

    injectHere3.appendChild(div);
}





function refreshDisplay(){
    let counter = 1;
        if(nameANDcost == []){
alert("Enter something!");
        }else{
            for( let i =0; i < nameANDcost.length; i+=2){
                createExpense(nameANDcost[i],nameANDcost[counter]);
                     counter =+ 2;
        }
        }
}


function refreshDisplay1(){
 
            if(budget == []){
alert("Enter something!");
        }else{
            for( let i =0; i < budget.length; i++){
                createBudget(budget[i]);
                
        }
        }
}

refreshDisplay1();
refreshDisplay();