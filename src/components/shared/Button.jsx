
function Button({children , version='primary' ,type="submit", isDisabled=false}) {
  return (
     <button type={type} isDisabled={isDisabled}  className={`btn btn-${version}` }>
               {children}
     </button>
  )
}

export default Button