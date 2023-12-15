import CreateRecipeForm from '@/app/ui/createRecipeForm';
import { Box, Text, Heading } from '@radix-ui/themes';

export default function Create() {
    return (
        <Box>
            <Heading as={'h1'}>Add new Recipe!</Heading>
            <Text>Share your yummy with the Repo fam</Text>

            <CreateRecipeForm />
        </Box>
    );
}
