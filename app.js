import { CallClient, CallAgent } from  '@azure/communication-calling';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

let call;
let callAgent;

const calleePhoneInput = document.getElementById('callee-phone-number');
const callPhoneButton = document.getElementById('call-phone-button');
const hangUpButton = document.getElementById('phone-hang-up-button');

async function init () {
    const callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential('');
    callAgent = await callClient.createCallAgent(tokenCredential);

    

}

callPhoneButton.addEventListener('click', () => {
    const phoneToCall = calleePhoneInput.value;
    call = callAgent.startCall(
        [{phoneNumber: phoneToCall}], { alternateCallerId: {phoneNumber: ''}
      });
      hangUpButton.disabled = false;
      callPhoneButton.disabled = true;
});
hangUpButton.addEventListener('click', () => {
    call.hangUp();
    hangUpButton.disabled = true;
    callPhoneButton.disabled = false;
});

init();
