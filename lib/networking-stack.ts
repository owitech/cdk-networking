import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class NetworkingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "MyVpc", {
      vpcName: "vpc-test",
      natGateways: 0,
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/25"),
      availabilityZones: ["us-east-1a", "us-east-1b"],
      subnetConfiguration: [
        {
          name: "Public",
          cidrMask: 26,
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    // (vpc.isolatedSubnets[0] as ec2.Subnet).addRoute("StaticRoute", {
    //   routerId: vpc.vpcId,
    //   routerType: ec2.RouterType.LOCAL_GATEWAY,
    //   destinationCidrBlock: "10.0.0.64/26",
    // });
  }
}
