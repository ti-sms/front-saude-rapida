import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface FormProps {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  title: string;
  form: React.ReactNode;
}

export default function FormModal({
  form,
  setVisible,
  title,
  visible,
}: FormProps) {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={title}
        visible={visible}
        style={{ width: "80vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        {form}
      </Dialog>
    </div>
  );
}
