import { TabsList, TabsRoot, TabsTrigger } from '@radix-ui/themes';
import GeneralInfosForm from '@ui/generalInfosForm';
import IngredientsForm from '@ui/ingredientsForm';
import InstructionsForm from '@ui/instructionsForm';

export default function CreateRecipeForm() {
    return (
        <form className={'mt-20'}>
            <TabsRoot id={'tab'} defaultValue={'General'} orientation={'horizontal'} className={'col-span-12'}>
                <TabsList>
                    <TabsTrigger value={'General'}>General</TabsTrigger>
                    <TabsTrigger value={'Ingredients'}>Ingredients</TabsTrigger>
                    <TabsTrigger value={'Instructions'}>Instructions</TabsTrigger>
                </TabsList>

                <GeneralInfosForm />
                <IngredientsForm />
                <InstructionsForm />
            </TabsRoot>
        </form>
    );
}
