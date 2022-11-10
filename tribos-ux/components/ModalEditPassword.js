import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ExclamationMark from "../components/common/Icons";
import styles from "./ModalEditPassword.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 544,
  height: 457,
  bgcolor: "#FBFBFC",
  borderRadius: "16px",
};

export default function ModalEditInfo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Modal Edit Password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.box}>
            <h1 className={styles.modal_edit_password_title}>
              Quer mudar sua senha?
            </h1>
            <fieldset className={styles.modal_input}>
              <legend>Sua antiga senha</legend>
              <input
                placeholder="Digite sua antiga senha"
                type="password"
                name="password"
              />
            </fieldset>
            <fieldset className={styles.modal_input}>
              <legend>Nova senha</legend>
              <input
                placeholder="Digite sua nova senha"
                type="password"
                name="password"
              />
            </fieldset>
            <div className={styles.password_advisor}>
              <ExclamationMark />
              <p>Mínimo 8 caracteres, deve conter uma letra e um número.</p>
            </div>
            <div className={styles.modal_confirm_btn}>
              <button>Confirmar</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
