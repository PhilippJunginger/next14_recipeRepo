import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    TabsContent,
    TextArea,
    TextFieldInput,
} from '@radix-ui/themes';
import { DIET, DIFFICULTY } from '@lib/enums';
import Image from 'next/image';
import FileUpload from '@ui/fileUpload';

export default function GeneralInfosForm() {
    return (
        <TabsContent value={'General'} className={'flex flex-wrap'}>
            <div className={'mt-5 max-w-md grid grid-cols-12 gap-3 mx-auto'}>
                <fieldset className={'col-span-12'}>
                    <label>Name</label>
                    <TextFieldInput name={'name'} />
                </fieldset>

                <fieldset className={'col-span-12'}>
                    <label>Description</label>
                    <TextArea name={'description'} rows={5} />
                </fieldset>

                <fieldset className={'col-span-6 flex-col '}>
                    <label>Difficulty</label>
                    <SelectRoot name={'difficulty'}>
                        <SelectTrigger className={'w-full'} placeholder={'Pick a difficulty'} variant={'soft'} />
                        <SelectContent position={'popper'}>
                            {Object.values(DIFFICULTY).map((difficulty) => (
                                <SelectItem value={difficulty} key={difficulty}>
                                    {difficulty}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
                </fieldset>

                <fieldset className={'col-span-6 flex flex-col w-full'}>
                    <label>Diet</label>
                    <SelectRoot name={'difficulty'}>
                        <SelectTrigger className={'w-full'} placeholder={'Pick a diet'} variant={'soft'} />
                        <SelectContent position={'popper'}>
                            {Object.values(DIET).map((difficulty) => (
                                <SelectItem value={difficulty.toString()} key={difficulty}>
                                    {difficulty}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
                </fieldset>

                <fieldset className={'col-span-6'}>
                    <label>Preparation</label>
                    <TextFieldInput placeholder={'in minutes'} name={'prepTime'} />
                </fieldset>

                <fieldset className={'col-span-6'}>
                    <label>Cooking</label>
                    <TextFieldInput placeholder={'in minutes'} name={'cookingTime'} />
                </fieldset>

                <FileUpload />
            </div>

            <Image className={'mx-auto my-auto max-w-md hidden'} id={'uploaded'} src={''} alt={'Uploaded image'} />
        </TabsContent>
    );
}
