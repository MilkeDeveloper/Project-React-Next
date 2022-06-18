import { NextPage } from "next";
import Title from "../../ui/components/Title/Title";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useReport } from "../../data/hooks/pages/pets/useReport";

const Report: NextPage = () => {
    const { ReportList } = useReport();
    
    return (
        <>
            <Title 
                title={'Relatório de Adoção'}
                subtitle={'Veja a baixo a lista de pets adotados'}
            />
            <TableContainer
                component={Paper}
                sx={{maxWidth: 820, mx: 'auto', p: {xs: 3, md: 5}}}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ReportList.map((report) => (
                            <TableRow key={report.id} >
                                <TableCell>{report.pet.name}</TableCell>
                                <TableCell>{report.user_email}</TableCell>
                                <TableCell align={'right'}>{report.value}</TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Report;