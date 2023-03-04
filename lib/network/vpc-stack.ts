import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class VpcStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, "MyVpc", {
      vpcName: "vpc-test",
      natGateways: 0,
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/25"),
      availabilityZones: ["us-east-1a"],
      subnetConfiguration: [
        {
          name: "Public",
          cidrMask: 26,
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          name: "Private",
          cidrMask: 26,
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });
  }
}
