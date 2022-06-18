import { Collapse, Grid, Textarea } from "@nextui-org/react"

export default function SustainabilityMetrics({ sustainabilityMetrics }) {
  return (
    <Collapse.Group>
      <Collapse title="Sustainability Metrics">
        <Textarea
          readOnly
          label="Carbon Emission"
          placeholder="0"
          value={sustainabilityMetrics.carbonEmission + 'mt'}
          minRows={1}
          width={'100%'}
        />
        <Grid.Container gap={1.5} justify='center'>
          <Grid xs>
            <Textarea
              readOnly
              label="Electricity Used"
              placeholder="0"
              value={sustainabilityMetrics.electricityUsed + 'mw'}
              minRows={1}
              width={'100%'}
            />
          </Grid>
          <Grid xs>
            <Textarea
              readOnly
              label="Water Used"
              placeholder="0"
              value={sustainabilityMetrics.waterUsed + 'g'}
              minRows={1}
              width={'100%'}
            />
          </Grid>
        </Grid.Container>
        <Textarea
          readOnly
          label='Waste Products'
          value={sustainabilityMetrics.waste.join(', ')}
          width={'100%'}
          rows={2}
        />
      </Collapse>
    </Collapse.Group>
  )
}