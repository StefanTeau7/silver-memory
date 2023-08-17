const express = require('express');
const bodyParser = require('body-parser');
const { Company, FinancialData } = require('./models');
const cors = require('cors');


const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Add a new company
app.post('/company', async (req, res) => {
    try {
        const companyData = {
            name: req.body.name,
            industry: req.body.industry,
            businessModel: req.body.businessModel,
            hqLocation: req.body.hqLocation,
            founderQuality: req.body.founderQuality,
            featureSet: req.body.featureSet
        };
        const company = await Company.create(companyData);
        res.status(201).json(company);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add financial data for a company
app.post('/financial-data', async (req, res) => {
    try {
        // Get the company's ID based on its name
        let company = await Company.findOne({ where: { name: req.body.name } });

        if (!company) {
            const companyData = {
                name: req.body.name,
            };
            company = await Company.create(companyData);
        }
        const financialDataFields = {
            companyId: company.id,  // using the queried company ID
            revenue: req.body.revenue,
            cashBurn: req.body.cashBurn,
            grossProfitPercentage: req.body.grossProfitPercentage,
            grossProfitDollar: req.body.grossProfitDollar,
            ebitda: req.body.ebitda,
            cashOnHand: req.body.cashOnHand,
            cac: req.body.cac,
            ltv: req.body.ltv,
            acvArpu: req.body.acvArpu,
            customerCount: req.body.customerCount,
            nextEstFundraise: req.body.nextEstFundraise
        };

        const financialData = await FinancialData.create(financialDataFields);

        res.status(201).json(financialData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
