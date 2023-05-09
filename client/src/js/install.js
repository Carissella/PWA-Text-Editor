const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event;
    butInstall.style.display = "block";
});

butInstall.addEventListener('click', async () => {
    butInstall.style.display = "none";
    const promptEvent = window.defferedPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoices;
    console.log(`User respond to installation prompt: ${outcome}`);
    window.defferedPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
    console.log("Apps installation has completed successfully:", event);
    window.defferedPrompt = null;
});