
//display all number and operators other than AC and =inside input with id=result
function display(num){
    result.value+=num

}
//2 clear all content
function clearAll()
{
    result.value=""
}
//3 evaluate expression
function output()
{
    result.value=eval(result.value)

}
//4 remove last element
function remove()
{
    result.value=(result.value).slice(0,-1)
}