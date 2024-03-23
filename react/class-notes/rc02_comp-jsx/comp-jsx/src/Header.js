//? Header Component
function Header(){
    //! JS alanı
    const yazi = "Hello FS16"
    return(
        //! JSX alanı
        
        <header>
            {/* jJSX alanı yorum satiri */}
            <h1 className="par">{yazi}</h1>
        </header>
    )
}

export default Header