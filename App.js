import {CallAgent, CallClient} from '@azure/communication-calling';
import {AzureCommunicationTokenCredential} from '@azure/communication-common';

let call;
let callAgent;
let callClient;

const calleePhoneInput = document.getElementById("phno-input");
const callButton = document.getElementById("call-button");
const hangButton = document.getElementById("hang-up-button");

async function init() {
    callClient = new CallClient();
    const token = new AzureCommunicationTokenCredential("eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOmU2ODQxZmFiLTY3YjYtNGMwNy1iMWVlLTA1MjMwYzllYzY4MV8wMDAwMDAxYS05MmJjLWViZTMtODVmNC0zNDNhMGQwMGQzOWYiLCJzY3AiOjE3OTIsImNzaSI6IjE2OTE5OTY2MDQiLCJleHAiOjE2OTIwODMwMDQsInJnbiI6ImFtZXIiLCJhY3NTY29wZSI6InZvaXAiLCJyZXNvdXJjZUlkIjoiZTY4NDFmYWItNjdiNi00YzA3LWIxZWUtMDUyMzBjOWVjNjgxIiwicmVzb3VyY2VMb2NhdGlvbiI6InVuaXRlZHN0YXRlcyIsImlhdCI6MTY5MTk5NjYwNH0.dp8-ZUUpj8oqIrGfFyqShKiod9-ojUsCc_S5b3H38fwF8-ZfKAht1nWKrYqeVa7m8vhtvFKo0MRpmin1sgBJp5vjxLbV_DlX1G4avs7Z3WoWy6tvPHk-8Og2AHfRN2evT8BYk6D6adyV_1nCHPGnEbWVytlgknhroTzXeHu2NB47y5b4WP0cIYqkYg5cFZJGrSc8d1zgBG5XT4hpYhkD20pUJtWKAW6Nv2ChCfo3-rqziQ5n0hh046uUjQtlMJoEezgDdTSWjBvwXfdx2JsKHHGdpRl91M_6G7e0ZrYip8EIrj3WuZcL3FzhcVKnPivsBvD4obP6FG8vIl8yozm1kg");
    callAgent = await callClient.createCallAgent(token);
}

init();

callButton.addEventListener("click", () => {
    call = callAgent.startCall([{phoneNumber: calleePhoneInput.value}], {alternateCallerId: "+18333411942"});
    hangButton.disabled = false;
    callButton.disabled = true;
});

hangButton.addEventListener("click", () => {
    call.hangUp();
    hangButton.disabled = true;
    callButton.disabled = false;
});