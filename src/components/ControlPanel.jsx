function ControlPanel({ setTheme, setFontSize, setCardStyle, toggleTips }) {
    return (
        <div>
            <h2>Panel de control</h2>
            
            <button onClick={() => setTheme("light")}>
                Tema Claro
            </button>

            <button onClick={() => setTheme("dark")}>
                Tema Oscuro
            </button>

            <h3>Tamaño de texto</h3>

            <button onClick={() => setFontSize("small")}>Pequeño</button>
            <button onClick={() => setFontSize("medium")}>Normal</button>
            <button onClick={() => setFontSize("large")}>Grande</button>

            <h3>Estilo de tarjeta</h3>

            <button onClick={() => setCardStyle("bordered")}>Con borde</button>
            <button onClick={() => setCardStyle("shadow")}>Con sombra</button>

            <h3>Tips</h3>
            <button onClick={toggleTips}>
                Mostrar / Ocultar Tips
            </button>

        </div>
    )
}

export default ControlPanel