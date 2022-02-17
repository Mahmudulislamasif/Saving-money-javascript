// Create function for calculate button
function updateBalance(isUpdated)
{
    const inputIncome=document.getElementById('input-income');
    const inputIncomeValue=inputIncome.value;
    if(isUpdated==true)
    {
        // take input for onclick calculate
        const inputFoodCost=document.getElementById('input-food-cost');
        const inputFoodCostValue=inputFoodCost.value;
        const inputRentCost=document.getElementById('input-rent-cost');
        const inputRentCostValue=inputRentCost.value;
        const inputClothCost=document.getElementById('input-cloth-cost');
        const inputClothCostValue=inputClothCost.value;
        let inputTotalExpense=document.getElementById('show-total-expenses');
        // Check error case for calculate
        if(inputIncomeValue=='' || inputFoodCostValue=='' || inputRentCostValue=='' || inputClothCostValue=='')
        {
            alert('Please Fill the empty field');
        }
        else if(isNaN(inputIncomeValue) || isNaN(inputFoodCostValue)  || isNaN(inputRentCostValue) || isNaN(inputClothCostValue) )
        {
            alert('Please Take number as an input Not String');
        }
        else if(inputIncomeValue<0 || inputFoodCostValue<0 || inputClothCostValue<0)
        {
            alert('Negative Number is not allowed');
        }
        else
        {
            const totalExpences=parseInt(inputFoodCostValue)+parseInt(inputRentCostValue)+parseInt(inputClothCostValue);
            if(totalExpences<inputIncomeValue)
            {
            inputTotalExpense.innerText=totalExpences;
            const getBalance = document.getElementById("total-balance");
            getBalance.innerText=parseInt(inputIncomeValue)-parseInt(totalExpences)
            }
            else
            {
                alert('Total Expences Not greater than Your Income')
    
            }
           
        }
    
    }
    else if(isUpdated==false)
    {
        updateRemainingBalance();
    }
}
// Create function for save button
function updateRemainingBalance()
{
    // take input field for onclick save button
    const inputIncome=document.getElementById('input-income');
    const inputIncomeValue=parseFloat(inputIncome.value);
    const savingAccount=document.getElementById('saving-amount');
    const savingAccountText=parseFloat(savingAccount.value);
    const getRemainingBalance=document.getElementById('remaining-balance')
    const getBalance = document.getElementById("total-balance");
    const getBalanceText=getBalance.innerText;
    const totalSavingAccount=document.getElementById('total-saving-amount');
    totalSavingAccount.innerText=(inputIncomeValue*savingAccountText)/100
    const totalSavingAccountSave=totalSavingAccount.innerText;
    //    Check erroe case for save button
        if(getBalanceText-totalSavingAccountSave>=0)
        {
            getRemainingBalance.innerText=getBalanceText-totalSavingAccountSave;
        }
        else if(getBalanceText-totalSavingAccountSave<0)
        {
            alert('You do not have enough Money to save')
            totalSavingAccount.innerText=''
            getRemainingBalance.innerText='0'
        } 
    }
  
document.getElementById("calculate-button").addEventListener('click',function()
{
  updateBalance(true);
})
document.getElementById('savings-money').addEventListener('click',function()
{
    updateRemainingBalance(false);
})
