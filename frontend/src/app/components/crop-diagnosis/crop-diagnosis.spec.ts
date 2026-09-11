import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CropDiagnosis } from "./crop-diagnosis";

describe("CropDiagnosis", () => {
  let component: CropDiagnosis;
  let fixture: ComponentFixture<CropDiagnosis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropDiagnosis],
    }).compileComponents();

    fixture = TestBed.createComponent(CropDiagnosis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
