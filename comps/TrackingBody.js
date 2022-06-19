import { Grid, Textarea, Collapse } from "@nextui-org/react"
import SustainabilityMetrics from "./SustainabilityMetrics"
import { TransitInfo } from "./TransitInfo"

export default function TrackingBody({ currentMaterial }) {
  return (
    <>
      <Textarea
        readOnly
        label="Batch Id"
        value={currentMaterial.batchId}
        placeholder="N/A"
        minRows={1}
        width={'100%'}
      />
      <Grid.Container gap={1.5} justify="center">
        <Grid xs>
          <Textarea
            readOnly
            label="Material Id"
            placeholder="N/A"
            value={currentMaterial.materialId}
            minRows={1}
            width={'100%'}
          />
        </Grid>
        <Grid xs>
          <Textarea
            readOnly
            label="Material Name"
            placeholder="N/A"
            value="HDPE"
            minRows={1}
            width={'100%'}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={1.5}>
        <Grid xs={4}>
          <Textarea
            readOnly
            label="Customer Id"
            value={currentMaterial.customerId}
            placeholder="N/A"
            minRows={1}
            width={'100%'}
          />
        </Grid>
        <Grid xs={8}>
          <Textarea
            readOnly
            label="Customer"
            value="DuPont"
            placeholder="..."
            minRows={1}
            width={'100%'}
          />
        </Grid>
      </Grid.Container>
      <Textarea
        readOnly
        label="Site Created"
        value={currentMaterial.siteCreated}
        placeholder="3475 E North Union Rd, Bay City, MI 48706"
        minRows={1}
        width={'100%'}
      />
      <Textarea
        readOnly
        label="Quantity"
        placeholder="0"
        value={currentMaterial.quantity + 'mt'}
        minRows={1}
        width={'100%'}
      />

      <div>
        {/* Transit Info */}
        <TransitInfo
          transits={currentMaterial.transits}
        />

        {/* Sustainability Metrics */}
        <SustainabilityMetrics
          sustainabilityMetrics={currentMaterial.sustainabilityMetrics}
        />

        {/* Raw Materials */}
        <Textarea
          readOnly
          label='Raw Materials'
          value={currentMaterial.rawMaterials.join(', ')}
          width={'100%'}
          rows={2}
        />
      </div>
    </>
  )
}