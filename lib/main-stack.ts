import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VpcStack } from "./network/vpc-stack";

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpcStack = new VpcStack(this, "MyVpcStack");
  }
}
