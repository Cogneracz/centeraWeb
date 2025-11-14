# Centera - Produktový Web

Moderní produktový web pro systém **Centera** (ActiveRetail) - komplexní řešení pro správu obchodních center.

## 📋 O projektu

Tento web představuje systém Centera, který digitalizuje a automatizuje všechny klíčové procesy spojené se správou obchodních center. Od správy nájemníků a smluv, přes automatickou fakturaci a sledování plateb, až po komplexní reporting.

## 🎨 Design

Web je navržen s důrazem na:
- **Moderní a čistý design** inspirovaný firemním webem Cognera
- **Tmavě modrá barva** (#1a3a52) odvozená z loga Centery
- **Glassmorphism efekty** pro moderní vzhled
- **Plynulé animace** pro lepší uživatelský zážitek
- **Responsivní design** fungující na všech zařízeních

## 🚀 Funkce

### Hero sekce
- Úvodní banner s hlavním sdělením
- Animované karty zobrazující klíčové funkce
- Statistiky (100% digitalizace, 50+ reportů, 24/7 přístup)
- Call-to-action tlačítka

### O produktu
- Popis systému Centera
- Vysvětlení hlavních výhod
- Informace o původu (vytvořeno Cognerou)

### Klíčové funkce (12 karet)
1. Správa center
2. Správa jednotek
3. Správa nájemníků
4. Smlouvy
5. Fakturace
6. Platby
7. Energie
8. Reporty
9. Správa dokumentů
10. Poznámky
11. RBAC systém
12. Audit log

### Výhody (6 karet)
1. Úspora času
2. Snížení chybovosti
3. Přehled v reálném čase
4. Bezpečnost dat
5. Škálovatelnost
6. Česká podpora

### Technologie
- **Frontend**: React 18, TypeScript, Material-UI, TanStack Query, Zustand
- **Backend**: Java 21, Spring Boot 3, PostgreSQL, JWT, OpenAPI
- **Infrastruktura**: Docker, Nginx, Linux, Git, CI/CD

### Kontaktní sekce
- Kontaktní formulář s validací
- Kontaktní informace (email, web)
- Notifikační systém pro zpětnou vazbu

## 📁 Struktura souborů

```
centera-product-site/
├── index.html          # Hlavní HTML struktura
├── styles.css          # Kompletní CSS styly
├── script.js           # JavaScript pro interaktivitu
├── centera.png         # Logo Centery
└── README.md           # Tato dokumentace
```

## 🛠️ Technologie

Web je vytvořen pomocí:
- **HTML5** - sémantická struktura
- **CSS3** - moderní styly s CSS Variables
- **Vanilla JavaScript** - bez závislostí na frameworcích
- **Google Fonts** - font Inter

## ✨ Interaktivní funkce

### Navigace
- Sticky navbar s animací při scrollování
- Smooth scroll na jednotlivé sekce
- Aktivní link podle aktuální sekce
- Mobilní menu s hamburger tlačítkem

### Animace
- Fade-in animace při scrollování (Intersection Observer)
- Floating animace pro hero karty
- Parallax efekt pro gradient orbs
- Ripple efekt na tlačítkách
- Counter animace pro statistiky

### Formulář
- Real-time validace inputů
- Vizuální zpětná vazba (zelená/červená border)
- Loading stav při odesílání
- Toast notifikace pro úspěch/chybu
- Automatické resetování po odeslání

### Další funkce
- Responzivní design pro mobily/tablety/desktop
- Console easter egg
- Debug režim pro localhost
- Optimalizovaný výkon

## 📱 Responsivní breakpointy

- **Desktop**: > 1024px - plné zobrazení
- **Tablet**: 768px - 1024px - 2 sloupce
- **Mobile**: < 768px - 1 sloupec, mobilní menu
- **Small Mobile**: < 480px - optimalizované fonty

## 🎯 Klíčové CSS vlastnosti

### CSS Variables
- Barvy odvozené z loga Centery
- Konzistentní shadows a border radius
- Modulární spacing systém
- Font family Inter

### Gradients
- Primární gradient (tmavě modrá)
- Akcent gradient (fialová)
- Soft gradient pro pozadí

### Shadows
- 4 úrovně stínů (sm, md, lg, xl)
- Použití pro depth a hierarchii

## 🚀 Jak použít

1. **Otevřete index.html** v moderním prohlížeči
2. **Pro vývoj**: Použijte Live Server nebo podobný nástroj
3. **Pro produkci**: Nahrajte všechny soubory na web server

### Doporučené nástroje pro vývoj
```bash
# Live Server (VS Code extension)
# nebo použijte Python
python3 -m http.server 8000

# nebo použijte Node.js
npx serve .
```

## 🎨 Customizace

### Změna barev
Upravte CSS variables v `styles.css`:
```css
:root {
    --primary: #1a3a52;        /* Hlavní barva */
    --secondary: #4a90e2;      /* Sekundární barva */
    --accent: #667eea;         /* Akcent */
}
```

### Změna obsahu
Upravte text přímo v `index.html`:
- Hero titulky a popisky
- Funkce a výhody
- Kontaktní informace

### Přidání nových sekcí
1. Přidejte HTML do `index.html`
2. Přidejte styly do `styles.css`
3. Přidejte link do navigace
4. Přidejte animace v `script.js`

## 📧 Kontaktní formulář

Formulář je připraven pro integraci s backendem. Upravte funkci v `script.js`:

```javascript
// V souboru script.js, řádek ~150
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // ZDE přidejte váš API endpoint
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
});
```

## 🔒 Bezpečnost

- Validace na frontend i backend (backend zatím není implementován)
- Ochrana proti XSS pomocí validace inputů
- HTTPS doporučeno pro produkci
- Žádné citlivé informace v JS

## 🌐 Browser support

Web je kompatibilní s:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance

### Optimalizace
- Minimal CSS (žádné frameworky)
- Vanilla JavaScript (žádné závislosti)
- Optimalizované obrázky
- Lazy loading připraveno

### Lighthouse skóre (očekávané)
- Performance: 95+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

## 🎓 Inspirace

Design inspirován:
- Web Cognera (www.cognera.cz)
- Material Design principles
- Modern SaaS landing pages
- Glassmorphism trend

## 📝 Poznámky

### Barvy loga Centery
- Primární: `#1a3a52` (tmavě modrá)
- Symbol budovy: Modern, čistý design
- Síťový kruh: Propojení a správa

### Font
- **Inter** - moderní, čitelný, podporuje češtinu
- Váhy: 300, 400, 500, 600, 700, 800

## 🚧 TODO (budoucí vylepšení)

- [ ] Integrace s backendem pro kontaktní formulář
- [ ] Přidání screenshotů aplikace
- [ ] Video demo systému
- [ ] Blog sekce
- [ ] Case studies / Reference
- [ ] FAQ sekce
- [ ] Multilanguage podpora (EN)
- [ ] Dark mode toggle
- [ ] Cookie consent banner

## 📄 Licence

© 2025 Centera by Cognera. All rights reserved.

## 👨‍💻 Autor

Vytvořeno pro **Cognera** s láskou a péčí.

---

Pro více informací navštivte [www.cognera.cz](https://www.cognera.cz)
