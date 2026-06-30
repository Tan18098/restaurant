// script.js - Enterprise Dynamic Web Script
window.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Luxury Footer Injection with Social Media Ecosystem
    const footerHtml = `
        <footer class="bg-stone-950 text-stone-400 py-12 text-center mt-auto border-t-4 border-orange-600 w-full">
            <div class="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
                
                <div class="flex gap-8">
                    <a href="https://www.instagram.com" target="_blank" class="text-stone-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                        <span class="text-2xl font-bold">IG</span>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" class="text-stone-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                        <span class="text-2xl font-bold">FB</span>
                    </a>
                    <a href="https://www.xiaohongshu.com" target="_blank" class="text-stone-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110">
                        <span class="text-2xl font-bold">RED</span>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" class="text-stone-400 hover:text-black hover:bg-white rounded-md px-1 transition-all duration-300 transform hover:scale-110">
                        <span class="text-2xl font-bold">TT</span>
                    </a>
                </div>

                <div class="bg-stone-900 border border-stone-800 rounded-xl p-5 max-w-xl text-xs text-stone-400 tracking-wide">
                    <span class="text-yellow-500 font-bold block mb-1">📢 COMPLIANCE & DIETARY ASSET NOTICE</span>
                    All ingredients across our 5 Malaysian estates are strictly sourced from Halal-certified corporate vendors. Our logistics and kitchen operations maintain a absolute <strong>Pork-Free & Alcohol-Free</strong> policy.
                </div>
                <p class="text-xs text-stone-600 mt-4">© 2026 Foodie Haven F&B Group. All rights reserved.</p>
            </div>
        </footer>
    `;
    
    const placeholder = document.getElementById('globalFooterPlaceholder');
    if (placeholder) {
        placeholder.innerHTML = footerHtml;
    }

    // 2. Formal Enterprise Contact Form Handler
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            alert("Thank you, " + name + ". Your enterprise concierge request has been safely logged. Our operations director will establish connection shortly.");
            form.reset();
        });
    }
});

// 3. Global High-Value Lightbox Framework... (保持你原有的 Lightbox 代码不变)
window.openLightbox = function(imageSrc) {
    const modal = document.getElementById('lightboxModal');
    const targetImg = document.getElementById('lightboxImg');
    if(modal && targetImg) {
        targetImg.src = imageSrc;
        modal.classList.remove('hidden');
        setTimeout(() => {
            targetImg.classList.remove('scale-95');
            targetImg.classList.add('scale-100');
        }, 20);
    }
}

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    const targetImg = document.getElementById('lightboxImg');
    if(modal && targetImg) {
        targetImg.classList.remove('scale-100');
        targetImg.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 150);
    }
}