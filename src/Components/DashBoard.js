import { useContext, React } from "react"
import { Box, Card, Grid, CardContent, Typography, Button } from '@mui/material'
import SavingsIcon from "@mui/icons-material/Savings"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import RefundIcon from "@mui/icons-material/CurrencyExchange"
import { UserContext } from "../UserContext"




const Dashboard = () =>{
    const { data, allSavings } = useContext(UserContext)
    
    const totalSavings = allSavings && allSavings.reduce((ac, savings) =>{
        return ac + parseFloat(savings.savingsAmmount || 0)
    }, 0)

    const formatedTotalSavings = totalSavings.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        MaximunFractionDigits: 2
    }) + 'MT'
    console.log(totalSavings)
    return (
        <div className="container" >
            <p style={{textAlign: 'center', paddingTop: 60, paddingBottom: 10, color: '#000000'}}>Olá, <b style={{ color: "#1976d2" }}>{data.name}</b>, seja bem vindo(a) ao Sistema de Gestão de PCR PFUNEKA!</p>  
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={3}>
                    <Grid item sx={12} md={6}>
                        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component='h2' gutterBottom sx={{ fontWeight: 'bold'}}>
                                    Resumo da Caixa
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <SavingsIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Total de Poupança:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>
                                            { formatedTotalSavings }
                                        </Typography>
                                    </Box> 
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <CreditCardIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Crédito activo:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>30,000.00MT</Typography>
                                    </Box> 
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <RefundIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Total de Reembolsos:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>16,000.00MT</Typography>
                                    </Box> 
                                </Box>
                            </CardContent>                       
                        </Card>
                    </Grid>

                    <Grid item sx={12} md={6}>
                        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component='h2' gutterBottom sx={{ fontWeight: 'bold'}}>
                                    Acções Rápidas
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Button variant="contained" size="large" fillWidth sx={{ textTransform: 'none'}}>
                                        Poupar (+)
                                    </Button> 
                                    <Button variant="contained" size="large" fillWidth sx={{ textTransform: 'none'}}>
                                        Solicitar Crédito (+)
                                    </Button> 
                                    <Button variant="contained" size="large" fillWidth sx={{ textTransform: 'none'}}>
                                        Reembolsar (+)
                                    </Button> 
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component='h2' gutterBottom sx={{ fontWeight: 'bold'}}>
                                    Resumo da Caixa
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <SavingsIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Total de Poupança:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>50,000.00MT</Typography>
                                    </Box> 
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <CreditCardIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Crédito activo:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>30,000.00MT</Typography>
                                    </Box> 
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <RefundIcon sx={{ fontSize: 40, mr: 2, color: 'text.secondary'}}/>
                                    <Box>
                                        <Typography variant="body2" color='text.secondary'>Total de Reembolsos:</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>16,000.00MT</Typography>
                                    </Box> 
                                </Box>
                            </CardContent>

                        
                        
                        </Card>
                    </Grid>
                </Grid>   
            </Box> 
        </div>
        
        
    )
}

export default Dashboard