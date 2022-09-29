
import React from 'react';
import { SparklineComponent,Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLineChart extends React.PureComponent{

  render(){

    const {id, height, width, color, data, type, currentColor}= this.props;

    return (
      <SparklineComponent  id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{color:currentColor, width:2}} dataSource={data} xName='xval' yName='yval' type={type} tooltipSettings={{visible:true,trackLineSettings:{
      visible:true}}}>
        <Inject services={[SparklineTooltip]}/>
      </SparklineComponent>
    )
  }
}

export default SparkLineChart;

