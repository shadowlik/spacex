import { Button, Flex } from "@chakra-ui/react";

export interface PaginationProps {
    onNext: () => void;
    onPrevious: () => void;
    page: number;
}

export function Pagination({ onNext, onPrevious, page }: PaginationProps) {
    return (
        <section>
            <Flex justifyContent='space-between'>
                <Button disabled={page === 0} onClick={onPrevious} colorScheme='blue' size='sm'>
                    Previous
                </Button>

                <Button onClick={onNext} colorScheme='blue' size='sm'>
                    Next
                </Button>
            </Flex>
        </section>
    )    
}