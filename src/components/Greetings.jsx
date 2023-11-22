function Greetings (props) {
    const {lang, children} = props
    const greetingOptions = {
        de: "Hallo",
        en: "Hello",
        es: "Qué pasa",
        fr: "Bonjour"
    }

    const greeting = greetingOptions[lang] || 'Hello';
return (
    <div>

    <h3>{greeting},{children}!</h3>
    </div>
)
}
export default Greetings