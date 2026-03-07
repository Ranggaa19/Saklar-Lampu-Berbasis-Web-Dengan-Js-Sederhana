function saklar() {
    // loop through every lamp/toggle pair instead of hard‑coding three
    for (let i = 1; i <= 10; i++) {
        const toggle = document.getElementById(`default-toggle${i}`);
        const lampu = document.getElementById(`lampu${i}`);

        // skip if either element is missing (in case you add/remove lamps later)
        if (!toggle || !lampu) continue;

        // use the same case as the folder name (Images) to avoid any filesystem issues
        lampu.src = toggle.checked ? "assets/Images/on.gif" : "assets/Images/off.gif";
    }
}