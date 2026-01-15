/**
 * Language Detection Test Suite
 * 
 * Open your browser console on the website and run:
 * copy & paste the functions below, then call testLanguageSystem()
 */

function testLanguageSystem() {
    console.log('=== FRITZGUARD LANGUAGE DETECTION TEST ===\n');
    
    // Test 1: Check if i18n is loaded
    console.log('Test 1: Checking if i18n system is loaded...');
    if (window.i18n) {
        console.log('✓ Translation system loaded');
    } else {
        console.error('✗ Translation system NOT loaded');
        return;
    }
    
    // Test 2: Check current language
    console.log('\nTest 2: Checking current language...');
    const currentLang = window.i18n.getLanguage();
    console.log('✓ Current language:', currentLang);
    
    // Test 3: Check localStorage
    console.log('\nTest 3: Checking localStorage...');
    const savedLang = localStorage.getItem('fritzguard_language');
    console.log('✓ Saved language in localStorage:', savedLang);
    
    // Test 4: Check available languages
    console.log('\nTest 4: Checking available languages...');
    const availableLangs = window.i18n.getAvailableLanguages();
    console.log('✓ Available languages:', availableLangs);
    
    // Test 5: Check browser language
    console.log('\nTest 5: Checking browser settings...');
    const browserLang = navigator.language || navigator.userLanguage;
    console.log('✓ Browser language setting:', browserLang);
    
    // Test 6: Test language detection
    console.log('\nTest 6: Testing language detection...');
    const detectedLang = window.i18n.detectLanguage();
    console.log('✓ Detected language:', detectedLang);
    
    // Test 7: Check language switcher buttons
    console.log('\nTest 7: Checking language switcher buttons...');
    const langButtons = document.querySelectorAll('.lang-switcher_wrapper [data-lang]');
    console.log('✓ Found language buttons:', langButtons.length);
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        const isActive = btn.classList.contains('active');
        console.log(`  - ${lang}: ${isActive ? '✓ ACTIVE' : 'inactive'}`);
    });
    
    // Test 8: Check widget configuration
    console.log('\nTest 8: Checking widget configuration...');
    const zcWidget = document.querySelector('[data-lang][data-restaurant]');
    if (zcWidget) {
        console.log('✓ Widget found');
        console.log('  - data-lang:', zcWidget.getAttribute('data-lang'));
        console.log('  - data-restaurant:', zcWidget.getAttribute('data-restaurant'));
    } else {
        console.log('⚠ No widget configuration found');
    }
    
    // Test 9: Test language switching
    console.log('\nTest 9: Testing language switching...');
    console.log('Testing: setLanguage("fr")');
    window.i18n.setLanguage('fr');
    console.log('✓ Language set to:', window.i18n.getLanguage());
    console.log('✓ Saved to localStorage:', localStorage.getItem('fritzguard_language'));
    
    // Reset to original
    window.i18n.setLanguage(currentLang);
    console.log('\nReset to original language:', currentLang);
    
    // Test 10: Check Weglot integration
    console.log('\nTest 10: Checking Weglot integration...');
    if (typeof Weglot !== 'undefined') {
        console.log('✓ Weglot is loaded');
        if (Weglot.getCurrentLanguage) {
            console.log('✓ Weglot getCurrentLanguage() is available');
            try {
                const weglotLang = Weglot.getCurrentLanguage();
                console.log('✓ Weglot current language:', weglotLang);
            } catch (e) {
                console.log('⚠ Could not get Weglot language:', e.message);
            }
        }
    } else {
        console.log('⚠ Weglot not loaded (this is normal if translation service is disabled)');
    }
    
    console.log('\n=== TEST COMPLETE ===');
    console.log('\nQuick Commands:');
    console.log('  window.i18n.getLanguage() - Get current language');
    console.log('  window.i18n.setLanguage("fr") - Switch to French');
    console.log('  window.i18n.setLanguage("nl") - Switch to Dutch');
    console.log('  window.i18n.setLanguage("en") - Switch to English');
    console.log('  window.i18n.detectLanguage() - Detect language');
}

// Run the test
testLanguageSystem();
