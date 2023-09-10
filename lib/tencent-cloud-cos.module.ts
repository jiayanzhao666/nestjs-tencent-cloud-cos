import { DynamicModule, Module, Global } from "@nestjs/common";

import { TencentCloudCosConfig } from "./interfaces/tencent-cloud-cos-config.interface";
import { TENCENTCLOUD_COS_MODULE_CONFIG } from "./tencent-cloud-cos.constant";
import { TencentCloudCosService } from "./tencent-cloud-cos.service";

@Global()
@Module({
  providers: [TencentCloudCosService],
  exports: [TencentCloudCosService],
})
export class TencentCloudCOSModule {
  public static withConfig(config: TencentCloudCosConfig): DynamicModule {
    return {
      module: TencentCloudCOSModule,
      providers: [
        { provide: TENCENTCLOUD_COS_MODULE_CONFIG, useValue: config },
      ],
    };
  }
}
