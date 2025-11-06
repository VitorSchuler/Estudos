const Challenge = () => {
    const a = 10;
    const b = 15;

const handleClick = () => {
    console.log(a + b)
}

  return (
    <div>
        <p>A:{a}</p>
        <p>B:{b}</p>
        <button onClick={handleClick}>Clique para ver a soma!</button>
    </div>
  )
}

export default Challenge