/**
 * Mahadev Mobiles — Interactive Showroom Application Script
 * Location: Vapi City, Taluka Pardi, District Valsad, Gujarat
 */

const NUM = '918160187482';
const INR = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const wa = (t) => `https://wa.me/${NUM}?text=${encodeURIComponent(t)}`;

document.addEventListener('DOMContentLoaded', () => {
  // Setup WhatsApp direct buttons
  ['waTop', 'waBar'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = wa('Hi Mahadev Mobiles, I would like to enquire about a flagship phone in stock.');
    }
  });

  // Store Hours: Real-time calculation in Indian Standard Time (IST)
  function updateStoreHours() {
    try {
      const hourStr = new Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      }).format(new Date());
      const hour = parseInt(hourStr, 10) % 24;
      const isOpen = hour >= 10 && hour < 22;
      const statusText = isOpen ? 'Open now, until 10 PM' : 'Closed, opens 10 AM';

      const statusEl = document.getElementById('status');
      if (statusEl) {
        statusEl.className = 'status' + (isOpen ? ' open' : '');
        if (statusEl.lastElementChild) {
          statusEl.lastElementChild.textContent = statusText;
        }
      }

      document.querySelectorAll('[data-live]').forEach((el) => {
        el.classList.toggle('open', isOpen);
        if (el.lastElementChild) {
          el.lastElementChild.textContent = statusText;
        }
      });
    } catch (e) {
      console.warn('Hours calculation fallback:', e);
    }
  }
  updateStoreHours();
  setInterval(updateStoreHours, 60000);

  // Phone Finder Database & Filtering
  const PHONES = [
    {
      n: 'Apple iPhone 15 Pro Max',
      b: 'Apple',
      p: 149900,
      t: ['camera'],
      cam: '48MP main, 5x telephoto lens',
      bat: 'All-day battery, 4,422 mAh',
      c: ['#3b3d44', '#8a8d94']
    },
    {
      n: 'Samsung Galaxy S24 Ultra',
      b: 'Samsung',
      p: 129999,
      t: ['camera', 'gaming'],
      cam: '200MP main, Galaxy AI, 5x zoom',
      bat: '5,000 mAh, 45W fast charging',
      c: ['#2b2f3a', '#6c7388']
    },
    {
      n: 'Google Pixel 8 Pro',
      b: 'Google',
      p: 98999,
      t: ['camera'],
      cam: '50MP main, Best Take & Magic AI',
      bat: '5,050 mAh, 30W wireless charging',
      c: ['#27323a', '#7a9aa8']
    },
    {
      n: 'OnePlus 12 5G',
      b: 'OnePlus',
      p: 64999,
      t: ['gaming', 'battery'],
      cam: '50MP 4th Gen Hasselblad Camera',
      bat: '5,400 mAh, 100W SUPERVOOC charging',
      c: ['#1e2a24', '#4f7f66']
    },
    {
      n: 'Apple iPhone 15',
      b: 'Apple',
      p: 71999,
      t: ['camera'],
      cam: '48MP dual camera, Dynamic Island',
      bat: 'All-day battery, 3,349 mAh',
      c: ['#41383a', '#b48f94']
    },
    {
      n: 'Nothing Phone (2)',
      b: 'Nothing',
      p: 36999,
      t: ['battery', 'gaming'],
      cam: '50MP dual Sony sensor with Glyph',
      bat: '4,700 mAh, 45W fast charging',
      c: ['#262626', '#a5a5a5']
    }
  ];

  let currentPriority = 'all';
  const grid = document.getElementById('grid');
  const budgetSelect = document.getElementById('budget');

  const inBudget = (price, budget) => {
    if (budget === 0) return true;
    if (budget === 50000) return price < 50000;
    if (budget === 100000) return price >= 50000 && price < 100000;
    return price >= 100000;
  };

  function renderPhones() {
    if (!grid || !budgetSelect) return;
    const selectedBudget = +budgetSelect.value;
    const filtered = PHONES.filter(
      (phone) =>
        (currentPriority === 'all' || phone.t.includes(currentPriority)) &&
        inBudget(phone.p, selectedBudget)
    );

    if (!filtered.length) {
      grid.innerHTML = '<div class="empty">No phones match the selected criteria. Try another priority or budget range.</div>';
      return;
    }

    grid.innerHTML = filtered
      .map(
        (x) => `
        <article class="card">
          <div class="art" style="--c1:${x.c[0]};--c2:${x.c[1]}">
            <i></i>
          </div>
          <span class="tag">${x.b}</span>
          <h3>${x.n}</h3>
          <div class="sp">
            <span>📷 ${x.cam}</span>
            <span>⚡ ${x.bat}</span>
          </div>
          <div>
            <div class="price">${INR(x.p)}</div>
            <div class="emi">0% EMI from ${INR(x.p / 12)} / month</div>
          </div>
          <div class="card-actions">
            <a class="btn btn-ink" target="_blank" rel="noopener" href="${wa(
              `Hi Mahadev Mobiles, I want to enquire about the ${x.n} at ${INR(x.p)}. Is it in stock at the Vapi showroom?`
            )}">Ask about this phone</a>
            <a class="btn btn-out" href="checkout.html?model=${encodeURIComponent(x.n)}&price=${x.p}">Order / Reserve online</a>
          </div>
        </article>
      `
      )
      .join('');
  }

  document.querySelectorAll('.pill').forEach((btn) => {
    btn.onclick = () => {
      currentPriority = btn.dataset.p;
      document.querySelectorAll('.pill').forEach((x) => x.setAttribute('aria-pressed', x === btn));
      renderPhones();
    };
  });

  if (budgetSelect) {
    budgetSelect.onchange = renderPhones;
  }
  renderPhones();

  // Trade-In Valuation Calculator
  const OLD_PHONES = {
    'iPhone 14 Pro': 52000,
    'iPhone 13': 34000,
    'iPhone 12': 24000,
    'Samsung Galaxy S23 Ultra': 48000,
    'Google Pixel 7 Pro': 30000,
    'OnePlus 11': 28000
  };

  const tradeSelect = document.getElementById('tm');
  const quotePhoneVal = document.getElementById('q1');
  const quoteAccVal = document.getElementById('q2');
  const quoteTotal = document.getElementById('total');
  const tradeWaBtn = document.getElementById('waTrade');

  if (tradeSelect) {
    tradeSelect.innerHTML = Object.keys(OLD_PHONES)
      .map((k) => `<option value="${k}">${k}</option>`)
      .join('');

    function calculateTradeQuote() {
      const conditionRadio = document.querySelector('[name=c]:checked');
      if (!conditionRadio || !quotePhoneVal || !quoteAccVal || !quoteTotal || !tradeWaBtn) return;

      const conditionMultiplier = +conditionRadio.value;
      const baseValue = (OLD_PHONES[tradeSelect.value] || 25000) * conditionMultiplier;
      const accessoriesValue = ['a1', 'a2', 'a3'].reduce((sum, id) => {
        const checkbox = document.getElementById(id);
        return sum + (checkbox && checkbox.checked ? +checkbox.value : 0);
      }, 0);

      const festivalBonus = 5000;
      const finalTotal = baseValue + accessoriesValue + festivalBonus;

      quotePhoneVal.textContent = INR(baseValue);
      quoteAccVal.textContent = '+ ' + INR(accessoriesValue);
      quoteTotal.textContent = INR(finalTotal);

      const conditionLabel = conditionRadio.nextElementSibling
        ? conditionRadio.nextElementSibling.textContent.trim()
        : 'Good';

      tradeWaBtn.href = wa(
        `Hi Mahadev Mobiles, I want to trade in my ${tradeSelect.value} (${conditionLabel} condition). Indicative online quote is ${INR(
          finalTotal
        )} (including ₹5,000 exchange bonus). Can I visit the Vapi City showroom today?`
      );
    }

    document
      .querySelectorAll('#tradein select, #tradein input')
      .forEach((input) => (input.onchange = calculateTradeQuote));
    calculateTradeQuote();
  }

  // Pinned How-It-Works Story Animation on Scroll
  const story = document.getElementById('how');
  if (story) {
    const steps = [...story.querySelectorAll('.step')];
    const panes = [...story.querySelectorAll('.pane')];

    function updateStory() {
      const rect = story.getBoundingClientRect();
      const progress = Math.min(0.999, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
      const stepIndex = Math.floor(progress * 3);

      steps.forEach((s, idx) => s.classList.toggle('on', idx === stepIndex));
      panes.forEach((p, idx) => p.classList.toggle('on', idx === stepIndex));
    }

    window.addEventListener('scroll', updateStory, { passive: true });
    updateStory();

    // Allow clicking steps directly
    steps.forEach((stepEl, idx) => {
      stepEl.addEventListener('click', () => {
        steps.forEach((s, k) => s.classList.toggle('on', k === idx));
        panes.forEach((p, k) => p.classList.toggle('on', k === idx));
      });
    });
  }

  // Scroll Progress Bar Fallback (for older browsers without CSS animation-timeline)
  const progBar = document.querySelector('.prog');
  if (progBar && !CSS.supports('animation-timeline', 'scroll(root)')) {
    window.addEventListener(
      'scroll',
      () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const ratio = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          progBar.style.transform = `scaleX(${ratio})`;
        }
      },
      { passive: true }
    );
  }

  // Navigation Link Highlight with IntersectionObserver
  const navLinks = [...document.querySelectorAll('nav a')];
  const sections = document.querySelectorAll('[data-sec]');
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => {
              a.dataset.on = String(a.getAttribute('href') === '#' + entry.target.id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((sec) => observer.observe(sec));
  }
});
