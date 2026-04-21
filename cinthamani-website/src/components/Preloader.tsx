/**
 * Preloader — Server Component
 * Renders inline with the initial HTML so it shows instantly (no hydration flash).
 * An inline script removes it once window.load fires + a small settle delay.
 */
export default function Preloader() {
  const script = `
    (function(){
      function hide(){
        var el = document.getElementById('preloader');
        if(!el) return;
        el.classList.add('preloader-hidden');
        setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 450);
      }
      if (document.readyState === 'complete') {
        setTimeout(hide, 300);
      } else {
        window.addEventListener('load', function(){ setTimeout(hide, 300); });
      }
    })();
  `;

  return (
    <>
      <div id="preloader" className="preloader" aria-hidden="true" role="presentation">
        <div className="preloader-content">
          {/* Use plain <img> — renders before React hydration, no next/image overhead */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Loading Cinthamani" className="preloader-logo" />
          <div className="loader"></div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
