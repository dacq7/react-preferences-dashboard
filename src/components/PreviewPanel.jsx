function PreviewPanel({ theme, fontSize, cardStyle, showTips }) {
    return (
        <div className={`card ${cardStyle}`}>
            <h2>Vista Previa</h2>
            <p className={fontSize}>Tema actual: {theme}</p>

            {showTips && (
                <p>Este es un tip de React: el estado controla la UI.</p>
            )}
        </div>
    )
}

export default PreviewPanel