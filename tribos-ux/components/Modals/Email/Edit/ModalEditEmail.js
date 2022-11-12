import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "./ModalEditEmail.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 544,
  height: 252,
  bgcolor: "#FBFBFC",
  borderRadius: "16px",
};

export default function ModalEditEmail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.modal_edit_email_btn}>
        <button onClick={handleOpen}>Editar e-mail</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.box}>
            <h1 className={styles.modal_edit_email_title}>
              Quer mudar seu email?
            </h1>
            <fieldset className={styles.modal_input}>
              <legend>Seu novo email</legend>
              <input
                placeholder="Digite seu novo e-mail"
                type="email"
                name="email"
              />
            </fieldset>
            <div className={styles.modal_confirm_btn}>
              <button>Confirmar</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
