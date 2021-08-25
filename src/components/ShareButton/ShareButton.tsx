import "./ShareButton.scss";
import React, { useEffect, useRef, useState } from "react";

export function ShareButton(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function shareLink(): void {
    setCopied(false);
    if (inputRef.current) {
      try {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
        setCopied(true);
      } catch (error) {
        // Error if not supported;
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="share-button">
      <input
        className="share-button__input"
        type="text"
        value={window.location.href}
        ref={inputRef}
      ></input>
      <div>
        <button className="share-button__button" onClick={() => shareLink()}>
          Compartir
        </button>
      </div>
      {copied && <div className="share-button__copied">Link copiado!</div>}
    </div>
  );
}
