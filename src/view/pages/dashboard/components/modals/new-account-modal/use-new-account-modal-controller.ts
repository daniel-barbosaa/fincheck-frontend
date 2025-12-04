import { useDashboard } from "../../../dashboard-context/use-dashboard";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();
  return { isNewAccountModalOpen, closeNewAccountModal };
}
