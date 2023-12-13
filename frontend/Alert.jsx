import { useState } from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

export default function Alert({ onDelete }) {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
  
    return (
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Delete Post</Text>
            <Button>Confirm</Button>
            <Button>Cancel</Button>
          </Modal>
        </Portal>
      </PaperProvider>
    );

}