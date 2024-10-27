function Intro({heading, mainHeading, par}) {
  return (
    <div>
      <div className="IntroContainer">
        <h2 className="Heading">{heading}</h2>
        <h1 className="MainHeading">{mainHeading}</h1>
        <p className="Par">{par}</p>
      </div>
    </div>
  )
}

export default Intro;