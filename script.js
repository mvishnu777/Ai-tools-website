const aiTools = [
    { 
        name: "ChatGPT", 
        description: "AI chatbot for text-based conversations", 
        link: "https://openai.com/chatgpt",
        logo: "https://assets.onecompiler.app/439cccyvb/439fje988/1000018981.png"
    },
    { 
        name: "Deepseek", 
        description: "AI chatbot for text-based conversations", 
        link: "https://www.deepseek.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018904.png"
    },
    { 
        name: "DALL·E", 
        description: "AI image generator that creates pictures from text prompts", 
        link: "https://openai.com/dall-e",
        logo: "https://assets.onecompiler.app/439cccyvb/439fje988/1000018985.png"
    },
    { 
        name: "MidJourney", 
        description: "AI-powered tool for generating artistic images and pictures", 
        link: "https://www.midjourney.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018967.png"
    },
    { 
        name: "Gemini", 
        description: "Google’s AI chatbot for text and code generation", 
        link: "https://bard.google.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018968.jpg"
    },
    { 
        name: "DeepL", 
        description: "AI-powered language translator for text", 
        link: "https://www.deepl.com/",
        logo: "  https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018969.png"
    },
    { 
        name: "RunwayML", 
        description: "AI-powered video and image editing software", 
        link: "https://runwayml.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018971.png"
    },
    { 
        name: "Synthesia", 
        description: "AI video avatar generator for making videos", 
        link: "https://www.synthesia.io/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018972.png"
    },
    { 
        name: "Grammarly", 
        description: "AI writing assistant that checks grammar and improves writing", 
        link: "https://www.grammarly.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018973.png"
    },
    { 
        name: "Pictory", 
        description: "AI-powered video creation tool for making short clips and pictures", 
        link: "https://pictory.ai/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018974.jpg" 
    },
    { 
        name: "Codeium", 
        description: "AI-powered code generator and auto-complete tool", 
        link: "https://www.codeium.com/",
        logo: "https://assets.onecompiler.app/439cccyvb/439fgbuvz/1000018975.png" 
    }
];

// Load AI tools dynamically with logos
function loadAITools(tools) {
    const toolsList = document.getElementById("ai-tools");
    toolsList.innerHTML = ""; 

    tools.forEach((tool, index) => {
        let toolDiv = document.createElement("div");
        toolDiv.classList.add("ai-card");
        toolDiv.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name} Logo" class="ai-logo">
            <h3>${index + 1}. ${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank">Visit</a>
        `;
        toolsList.appendChild(toolDiv);
    });
}

// Search functionality with keyword matching
document.getElementById("search").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const filteredTools = aiTools.filter(tool =>
        tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)
    );
    loadAITools(filteredTools);
});

// Load AI tools on page load
window.onload = () => loadAITools(aiTools);
// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("dark-mode-toggle");
    icon.src = document.body.classList.contains("dark-mode") ? "https://assets.onecompiler.app/439cccyvb/439j23tvh/1000019069.png" : "  https://assets.onecompiler.app/439cccyvb/439j23tvh/1000019068.png";
});

// Load AI Tools on Page Load
window.onload = () => loadAITools(aiTools);
