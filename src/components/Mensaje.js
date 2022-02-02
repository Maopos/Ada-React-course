const Mensaje = ({ sty, msg }) => {
  return (
    <div>
      <p className={sty}>{msg}</p>
    </div>
  );
};

export default Mensaje;
