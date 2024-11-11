function Button({ children, version = 'primary', type = 'submit', isDisabled = false }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
