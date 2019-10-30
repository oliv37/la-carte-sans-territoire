import {
	UPDATE_ID_HIGHTLIGHTED,
	UPDATE_MAP_ID_SELECTED,
	UPDATE_CHOICE_ID_SELECTED,
	UPDATE_IDS_VALIDATED,
	UPDATE_HAS_ERROR,
	RESET_IDS_SELECTED,
	RESET
} from "../mapActions";

describe("mapActions", () => {

	describe("action types", () => {

		it("should define UPDATE_ID_HIGHTLIGHTED action type", () => {
			expect(UPDATE_ID_HIGHTLIGHTED).toBe("update_id_highlighted");
		});

		it("should define UPDATE_MAP_ID_SELECTED action type", () => {
			expect(UPDATE_MAP_ID_SELECTED).toBe("update_map_id_selected");
		});

		it("should define UPDATE_CHOICE_ID_SELECTED action type", () => {
			expect(UPDATE_CHOICE_ID_SELECTED).toBe("update_choice_id_selected");
		});

		it("should define UPDATE_IDS_VALIDATED action type", () => {
			expect(UPDATE_IDS_VALIDATED).toBe("update_ids_validated");
		});

		it("should define UPDATE_HAS_ERROR action type", () => {
			expect(UPDATE_HAS_ERROR).toBe("update_has_error");
		});

		it("should define RESET_IDS_SELECTED action type", () => {
			expect(RESET_IDS_SELECTED).toBe("reset_ids_selected");
		});

		it("should define RESET action type", () => {
			expect(RESET).toBe("reset");
		});

	});

});