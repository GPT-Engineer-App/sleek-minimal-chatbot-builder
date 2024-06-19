import { useState } from "react";
import { Container, VStack, Text, Button, Input, Textarea, Box, useToast } from "@chakra-ui/react";
import { FaUpload, FaFileImport, FaPaste } from "react-icons/fa";

const Index = () => {
  const [dataset, setDataset] = useState("");
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setDataset(e.target.result);
      toast({
        title: "File uploaded.",
        description: "Your dataset has been uploaded successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
    reader.readAsText(file);
  };

  const handleImportDataset = () => {
    // Placeholder for import dataset logic
    toast({
      title: "Dataset imported.",
      description: "Your dataset has been imported successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handlePasteDataset = (event) => {
    setDataset(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">AI Chatbot Builder</Text>
        <Box width="100%">
          <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid" width="100%" as="label">
            Upload Dataset
            <Input type="file" display="none" onChange={handleFileUpload} />
          </Button>
        </Box>
        <Box width="100%">
          <Button leftIcon={<FaFileImport />} colorScheme="blue" variant="solid" width="100%" onClick={handleImportDataset}>
            Import Dataset
          </Button>
        </Box>
        <Box width="100%">
          <Textarea placeholder="Paste your dataset here..." value={dataset} onChange={handlePasteDataset} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;