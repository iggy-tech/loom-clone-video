import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

const FAQS = () => {
    return ( 
    <div className='flex-col flex items-center justify-center pt-40'>
        <div className='text-4xl font-medium pb-10'>
            FAQS
        </div>
        <Accordion
        className='md:w-2/3 w-full px-10 md:px-0'
        type='single'
        collapsible>
            <AccordionItem
            className='my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]' value='item-1'>
                <AccordionTrigger className='font-medium'>How do I purchase Bird ?</AccordionTrigger>
                <AccordionContent>
                    It is possible to purchase bird. Click here to learn more. 
                </AccordionContent>
            </AccordionItem>

            <AccordionItem
            className='my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]' value='item-2'>
                <AccordionTrigger className='font-medium'>How do I purchase Bird ?</AccordionTrigger>
                <AccordionContent>
                    It is possible to purchase bird. Click here to learn more. 
                </AccordionContent>
            </AccordionItem>

            <AccordionItem
            className='my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]' value='item-3'>
                <AccordionTrigger className='font-medium'>How do I purchase Bird ?</AccordionTrigger>
                <AccordionContent>
                    It is possible to purchase bird. Click here to learn more. 
                </AccordionContent>
            </AccordionItem>

            <AccordionItem
            className='my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]' value='item-4'>
                <AccordionTrigger className='font-medium'>How do I purchase Bird ?</AccordionTrigger>
                <AccordionContent>
                    It is possible to purchase bird. Click here to learn more. 
                </AccordionContent>
            </AccordionItem>

            <AccordionItem
            className='my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]' value='item-5'>
                <AccordionTrigger className='font-medium'>How do I purchase Bird ?</AccordionTrigger>
                <AccordionContent>
                    It is possible to purchase bird. Click here to learn more. 
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div> );
}
 
export default FAQS;